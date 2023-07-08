"# hello-react" 

# Two types of import export
    1. export default compomentname - import compomentname from path
    2. export const compomentname - import {compomentname}  from path -> NAMED EXPORT IMPORT - when you have multiple entities to export then you have to used the named EXPORT IMPORT.

# react hooks
    - these are normal js utility fucntions wrote by facebook develoepers in react
    - we have to import these functions in our code
    - two very imp hooks
        - useState()
            - it maintains the state of component.
            - whenever state variable update , react will re-render the component
            - can we used named and normal export both for same component ?
        - useEffect()
            - it takes two arguments
                1. arrow function
                2. dependency array
            - when to use ? 
                - when render cycle is completed then useEffect function will call
            - useEffect dependency array
                - if there is not dependency array then useEffect callback will called on every component render
                - if dependency array is empty = [] then useEffect callback will called on initial render (only once)
                - if dependency array has some value i.e state then useEffect callback will called whenever that state updated
# optional chaining

# Shimmer
    A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. 

# Routing in web app
    1. Client side routing
    2. Server side routing  (it includes network call to get data and load the data)

