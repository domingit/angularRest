export function compareNumbers<T>(c1: T, c2: T, attribute: string = 'id') {

    const compare = c1[attribute] - c2[attribute];
    if (compare > 0) {
        return 1;
    } else if (compare < 0) {
        return -1;
    } else {
        return 0;
    }
  
  }