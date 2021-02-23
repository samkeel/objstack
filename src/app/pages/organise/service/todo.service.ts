import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { toDoModel } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  // Create a new todo
  async createTodo(data: toDoModel) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('todos').add({
      ...data,
      uid: user?.uid,
      description: 'default description',
      label: 'yellow'
    })    
  }
  // delete task
  deleteToDo(toDoID: string) {
    return this.db
    .collection('todos')
    .doc(toDoID)
    .delete();
  }

  // update todos
  // updateToDo(toDoID: string){
  //   return this.db
  //   .collection('todos')
  //   .doc(toDoID)
  //   .update()
  // }

  getUserToDos() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<toDoModel>('todos', ref =>
            ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id'});
        } else {
          return [];
        }
      })
    )
  }

  // batch write to change todos for each item on user drag and drop
  sortToDos(todos: toDoModel[]) {
    const db = firebase.default.firestore();
    const batch = db.batch();
    const refs = todos.map(t => db.collection('todos').doc(t.id));
    refs.forEach((ref, idx) => batch.update(ref, {priority: idx}));
    batch.commit();
  }
}
