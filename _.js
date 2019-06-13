const _= {
	clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
		const clampedValue = Math.min(lowerClampedValue, upper);
     return clampedValue;
		},
  
	inRange (number, startValue, endValue) {
     	if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
      };
    
   	if (startValue > endValue) {
      const tempValue = endValue;
    	endValue = startValue;
    	startValue = tempValue;
    	};
    
   	const isNotInRange = (number < startValue) || (number >= endValue);
    if(isNotInRange) {
      return false;
    } else {
      return true;
    };
    
    const isInRange = startValue <= number < endValue;
    if(isInRange) {
      return true;
    } else {
      return false;
    }
  },
      
  words (string) {
  const words = string.split(' ');
  return words;
	},
  
  pad(string, length) {
    const targetLength = length <= string.length
    if (targetLength) {
    	return string;
    }
    
    const rightPaddingAmount = Math.floor((length - string.length)/2);
    
    const leftPaddingAmount = length - rightPaddingAmount;
    
     	const paddedString = ' '.repeat(rightPaddingAmount) + string + ' '.repeat(leftPaddingAmount);
    
    return paddedString;

    },
    has (object, keyValue) {
      const check = object.keyValue !== undefined;
      if(check) {
      return true;
      } else {
      return false;
    }
  }, 
    invert(object) {
      let invertedObject = {};
      for (let key in object) {
        let originalValue = object[key];
        invertedObject = {originalValue: key}
      }
      return invertedObject;
    },
    
    findKey(object, predicate) {
    
        for (key in object) {
          const value = object[key];
          const predicateReturnValue = predicate(value);
          if (predicate(value) === true) {
            return key;
          } else {
            return undefined;
        }
      }
    },

    drop(array, dropNumber) {
      if (dropNumber == undefined) {
          var dropNumber = 1
      }
      let newArray = array.slice(dropNumber);
      return newArray;
    },

    dropWhile (array, predicate) {
      var dropNumber = array.findIndex(function(element, index) {
        let predicateReturnValue = predicate(element, index, array);
      return !predicateReturnValue;
        }
      );
      let droppedWhileArray = this.drop(array, dropNumber);
      return droppedWhileArray;
    },
    chunk(array, size) {
      if (size == undefined) {
       var size = 1;
      }
      let arrayChunks = [];
      for (let step = 0; step < array.length; step += size) {
        let arrayChunk = array.slice(step, step + size);
        arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
       }
  }  
  // Do not write or modify code below this line.
module.exports = _;