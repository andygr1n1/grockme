export const binarySort = (array: string[], item: string): string => {
    let binaryArr = array
    let middleIndex = 0

    while (middleIndex <= binaryArr.length) {
        middleIndex = Math.floor(binaryArr.length / 2)

        if (binaryArr[middleIndex] === item) {
            //
            return binaryArr[middleIndex]
            //
        } else if (binaryArr[middleIndex] < item) {
            //
            binaryArr = binaryArr.slice(middleIndex + 1, binaryArr.length)
            //
        } else if (binaryArr[middleIndex] > item) {
            //
            binaryArr = binaryArr.slice(middleIndex)
            //
        }
    }

    return binaryArr[middleIndex]
}
