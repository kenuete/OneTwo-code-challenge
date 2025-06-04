const isNumber = (char: string) => !isNaN(Number(char))

const getRepeatCountArray = (input: string): number[] => {
    let repeatCount = ''
    let repeatCountArray: number[] = []

    for(let i = 0; i < input.length; i++) {
        if(isNumber(input[i])) {
            repeatCount += input[i] // handle multi digits
        } 
        // insert only if repeatCount is number (handling last iteration)
        else if(parseInt(repeatCount)) { 
            repeatCountArray.push(parseInt(repeatCount))
            repeatCount = ''
        }
    }
    return repeatCountArray
}

const getRepeatCharArray = (input: string) => {
    let repeatChar = ''
    let repeatCharArray = []

    for(let i = 0; i < input.length; i++) {
        if(!isNumber(input[i])) {
            repeatChar += input[i] // handle multi chars
        } 
        // insert only if repeatChar exists and changeover occurs between string to number and also
        // handle last iteration
        if(repeatChar && (isNumber(input[i]) || i === input.length-1)) {
            repeatCharArray.push(repeatChar)
            repeatChar = ''
        }
    }
    return repeatCharArray
}

export const expandString = (input: string) => {
    let outputString = ''
    const repeatCountArray = getRepeatCountArray(input)
    const repeatCharArray = getRepeatCharArray(input)
    
    for(let i =0; i < repeatCountArray.length; i++) {
        outputString += repeatCharArray[i].repeat(repeatCountArray[i])
    }
    return outputString
}