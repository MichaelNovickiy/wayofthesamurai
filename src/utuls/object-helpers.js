export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(m => {
        if (m[objPropName] === itemId) {
            return {...m, ...newObjProps}
        }
        return m;
    })
}