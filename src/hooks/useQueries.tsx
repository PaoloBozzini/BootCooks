import { useState } from "react";
import debounce from 'lodash.debounce';

//UNCOMMENTED ROUTER RELATED LOGIC ALLOWS SAVING THE QUERY WHEN THE PAGE IS REFRESHED 
// import { useRouter } from 'next/router'
import {Query} from '../types/query'

const useQueries = (inputs:Query[]) => {
  let checkedInitialState = {};
  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      checkedInitialState = {
        ...checkedInitialState,
        [input.name]: [],
      };
      return;
    }
    checkedInitialState = {
      ...checkedInitialState,
      [input.name]: "",
    };
  });


  const [checked, setChecked] = useState(checkedInitialState);
  const [index, setIndex] = useState(0);

  // const router = useRouter()
  // const initialQuery = Object.keys(router.query).length === 0 && router.query.constructor === Object ? {q:'italian'} : router.query
  const initialQuery = {q:'italian'}
  const [query, setQuery] = useState(initialQuery);


  const handleSearch = (e) => {
    const { type, name, value } = e.target

    let newQuery = {...initialQuery}
    let newChecked

    if (type === 'radio'){
        newQuery = { ...query,
          [name]: value }
        newChecked = {
          ...checked,
          [name]: value,
        }
    }

    if (type === 'checkbox'){
     
      const checkedBoxes = checked[name];
      const valueIndex = checkedBoxes.indexOf(value)
      if(valueIndex > -1){
        checkedBoxes.splice(valueIndex, 1);
      } else {
        checkedBoxes.push(value);
      }
      newQuery = {
        ...query,
        [name]: checkedBoxes,
      }
      newChecked = {
        ...checked,
        [name]: checkedBoxes,
      }
    }

    if(type === 'text'){
      newQuery = {
        ...query,
        [name]: value !== "" ? value : "italian",
      }
    }

    if(newChecked) setChecked(newChecked);
    setQuery(newQuery);
    setIndex(0);
    //window.scrollTo(0,0);
    // router.push({query : newQuery})
  }


  const resetAllQueries = () => {
    setIndex(0);
    setQuery(initialQuery);
    setChecked(checkedInitialState);
    // router.push({query : {q: "italian"}});
  };

  const inputsProps = [];
  inputs.forEach((input) => {
    if (input.type === "text") {
      const newInput = {
        ...input,
        onChange: debounce(handleSearch, 1000),
      };
      inputsProps.push(newInput);
      return;
    }

    const options = [];
    if (input.type === "checkbox") {
      input.options.forEach((option) => {
        const newOptions = {
          ...option,
          checked: checked[input.name].includes(option.value),
        };
        options.push(newOptions);
      });
    }

    if (input.type === "radio") {
      input.options.forEach((option) => {
        const newOptions = {
          ...option,
          checked: checked[input.name] === option.value,
        };
        options.push(newOptions);
      });
    }

    const newInput = {
      ...input,
      onChange: handleSearch,
      options: options,
    };

    inputsProps.push(newInput);
  });

  return { inputsProps, query, index, setIndex, resetAllQueries };
};

export default useQueries;
