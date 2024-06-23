function arrayManipulation(nums, commands) {

    for (const command of commands) {

        let tokens = command.split(' ');
        const action = tokens.shift()

        if (action === 'add') {
            const index = Number(tokens.shift());
            const element = Number(tokens.shift())

            nums.splice(index, 0, element);

        } else if (action === 'addMany') {
            let index = Number(tokens.shift());

            for (let element of tokens) {

                element = Number(element)

                nums.splice(index, 0, element)
                index++
            }
        } else if (action === 'contains') {
            const element = Number(tokens.shift());
            const elementIdx = nums.indexOf(element)
            console.log(elementIdx);

        } else if (action === 'remove') {
            const index = Number(tokens.shift())
            nums.splice(index, 1);

        } else if (action === 'shift') {
            const rotations = Number(tokens.shift());

            for (let rotation = 1; rotation <= rotations; rotation++) {

                const firstEl = nums.shift();
                nums.push(firstEl);
            }

        } else if (action === 'sumPairs') {
            let resultArr = [];

            for (let i = 0; i < nums.length; i += 2) {

                let firstNum = nums[i];
                let nextNum = nums[i + 1];

                if (nextNum === undefined) {

                    resultArr.push(firstNum);
                } else {

                    resultArr.push(firstNum + nextNum);
                }

            }

            nums = resultArr;

        } else {
            console.log(`[ ${nums.join(', ')} ]`);

        }
    }
}
arrayManipulation([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulation([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])