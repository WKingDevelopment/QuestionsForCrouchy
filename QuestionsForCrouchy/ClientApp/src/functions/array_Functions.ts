import { Question } from "../clientModels/Question";

const arrayComparer = (array1:any[],array2:any[]):boolean => {
    let result = false;
    if(JSON.stringify(array1) === JSON.stringify(array2)) {
        result = true
    }
    return result
}

const removeFromArrayByIndex = (index:number, list:Question[]): Question[] => {
    let result: Question[] = []
        for (let i=0;i<list.length;i++) {
            if (i !== index) {
                result = result.concat([list[i]])
            }
        }
        return result
}

export { arrayComparer, removeFromArrayByIndex}