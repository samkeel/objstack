export interface toDoModel {
    id?: string;
    title?: string;
    priority?: number;
    description?: string;
    label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'grey';
}