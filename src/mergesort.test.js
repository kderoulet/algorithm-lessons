const mergeSort = require('./mergesort')

test('sorts 3, 4, 5', () => {
    expect(mergeSort([3, 5, 4])).toEqual([3, 4, 5])
})

test('sorts one value', () => {
    expect(mergeSort([0])).toEqual([0])
})

test('sorts large arrays', () => {
    expect(mergeSort([92, 23, 41, 23, 12, 4, 34 , 645, 345, 543, 234, 432, 2394, 943, 239, 69320, 349, 23, 32, 239]))
    .toEqual([4, 12, 23, 23, 23, 32, 34, 41, 92, 234, 239, 239, 345, 349, 432, 543, 645, 943, 2394, 69320])
})