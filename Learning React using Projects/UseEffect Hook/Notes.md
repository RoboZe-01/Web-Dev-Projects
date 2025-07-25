
# UseEffect

**usedfor  : **

- Remove side effect inside the component
- Remove side effect from outsifde the component
- Use to fetch data 
- Can use as life cycle methods
- can use for DOM manipulation
- Much more


**Syntax**

`useEffect(() => {
    <! --Write the function of the useeffect-->
 } , [dependency array ( Varible on which it is dependent)])`



 We can control something when some specific state is updated

 `For Example
 useEffect(() =>{
    // callOnce();\
    CounterFunction()
  },[counter])

  function CounterFunction (){
    console.log(`Counter ${counter}`)
    This function only activate once counter state is updated`



## Handeling Dependencies

1. `useEffect(() =>{
    // Calls Every time
  })`

2. `useEfect((=>{
   // Calls only once
    } ,[])`  

3. `useEfect(()=>{
    // updates when specific states is updates
  } ,[state])`

4. useEffect(()=>{
    //calls on changon both the states
    }[state1,state2])
5. useEffect(()=>{
    //calls on changon both the props
    }[prop1,prop2])



## 