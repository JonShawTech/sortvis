import React from 'react';
import { render } from '@testing-library/react';
import '../App.css'


export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
      }
    
      componentDidMount() {
        this.createArray();
      }
      createArray() {
        const newArr = [];
        for (let i = 0; i < 150; i++) {
          newArr.push(Math.floor(Math.random() * 750) + 5);
        }
        this.setState({ array: newArr });
        console.log("newArry = " + newArr);
      }

      
selectionSort (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      setTimeout(() => {
        for (let j = i + 1; j < len; j++) {
            
          if (arr[min] > arr[j]) {
            min = j;
          }
        }
            
        
        if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
        }

        this.setState({ array: arr });
      }, i * 100);
    
    
    }
  };

bubbleSort(inputArr)  {
    
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
      
        for (let j = 0; j < len; j++) {
            setTimeout(() => {
          if (inputArr[j] > inputArr[j + 1]) {
            let tmp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = tmp;
            this.setState({ array: inputArr });
          }
        
      }, i * 300);
    }
    }
  };

insertionSort (inputArr) {
    let length = inputArr.length;

    for (let i = 1; i < length; i++) {
      setTimeout(() => {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
        }
        inputArr[j + 1] = key;

        this.setState({ array: inputArr });
      }, i * 100);
    }
  };

 quickSort(arr, left = 0, right = arr.length - 1) {
     
    let len = arr.length,
      index;
      setTimeout(() => {
      if (len > 1) {
        index = this.partition(arr, left, right);

        if (left < index - 1) {
          this.quickSort(arr, left, index - 1);
        }

        if (index < right) {
          this.quickSort(arr, index, right);
        }
      }

      this.setState({ array: arr });
    },  300);
  }

partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
      pivot = arr[middle],
      i = left,
      j = right;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    
    return i;
  }

swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

      render() {
        const { array } = this.state;
        return (
          <div>
            <div>
              <button className="btn" onClick={() => this.createArray()}>
                New Array
              </button>
              <button className="btn" onClick={() => this.bubbleSort(this.state.array)}>
                Bubble Sort
              </button>
              <button
                className="btn"
                onClick={() => this.selectionSort(this.state.array)}
              >
                Selection Sort
              </button>
              <button
                className="btn"
                onClick={() => this.insertionSort(this.state.array)}
              >
                Insertion Sort
              </button>
    
              <button
                className="btn"
                onClick={() => this.quickSort(this.state.array)}
              >
                Quick sort
              </button>
            </div>
            <div className="arrayContainer">
              {array.map((value, idx) => (
                <div
                  className="arrayBar"
                  key={idx}
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        );
      }
    }
    