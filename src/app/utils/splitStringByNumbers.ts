export function splitStringByNumbers(inputString: string) {
    // Split the string based on the numbers followed by a dot and space
    var regex = /\d+\.\s/
    var resultArray = inputString.split(regex)

    // Remove any empty strings from the array
    resultArray = resultArray.filter(function (item) {
        return item.trim() !== ''
    })

    return resultArray
}
