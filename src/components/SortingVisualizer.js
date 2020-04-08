import React from 'react';
import { render } from '@testing-library/react';
import '../App.css'


export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);       
    
        this.state = {
          array: []         
        };
      }
    
      componentDidMount() {
        
        this.createArray();
      }
      createArray() {   
       
        const newArr = [];        
        for (let i = 0; i < 150; i++) {
          newArr.push(Math.floor(Math.random() * 450) + 5);         
          
        }
        this.setState({ array: newArr });      
      }
    

selectionSort (arr) {
  const arrayBars = document.getElementsByClassName('arrayBar');
  const color = "#00FF00";
  let sortedValue = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      const barOneStyle = arrayBars[i].style;
      
      let min = i;
      setTimeout(() => {
        for (let j = i + 1; j <= len; j++) {
          barOneStyle.backgroundColor = color;
          sortedValue++;
            
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


  const arrayBars = document.getElementsByClassName('arrayBar');

  const green = "#00FF00";
  const red = "rgb(255,0,0)"
  
  let sortedValue = inputArr.length;  
    
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
      sortedValue--;
      
      const sortedBarStyle = arrayBars[sortedValue].style;

   
      
        for (let j = 0; j <= len; j++) {
            setTimeout(() => {
              sortedBarStyle.backgroundColor = green;
            
          if (inputArr[j] > inputArr[j + 1]) {
            let tmp = inputArr[j];    
            
            
            inputArr[j] = inputArr[j + 1];

            inputArr[j + 1] = tmp;
           
        
         
            this.setState({ array: inputArr });
          }
        
      }, i * 200);
    }
    }
  };

insertionSort (inputArr) {
    let length = inputArr.length;
    
    const arrayBars = document.getElementsByClassName('arrayBar');
    const color = "#00FF00";
    let sortedValue = 0;
    

    for (let i = 1; i <= length; i++) {
      const barOneStyle = arrayBars[sortedValue].style;
      sortedValue++;
      console.log(sortedValue)
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
          
        
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
          barOneStyle.backgroundColor = color;
        }
        inputArr[j + 1] = key;
        
        this.setState({ array: inputArr });
      }, i * 100);
    }
  };



      render() {
      //  const { array } = this.state;
        return (
          <div>
            <div>
              {/* <button className="btn" onClick={() => this.createArray()}>
                New Array
              </button> */}
              <button className="btn" onClick={() => window.location.reload(false)}>New Array</button>
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

              

            </div>
            <div className="arrayContainer">
              {this.state.array.map((value, idx) => (
                <div
                  className="arrayBar"
                  key={idx}
                  style={{ height: `${value}px`, backgroundColor: 'rgb(55, 192, 238)'}}
                ></div>
              ))}
            </div>
          </div>
        );
      }
    }
    