import React, { useEffect, useState } from 'react'
import  {createMember, getMember, updateMember}  from '../services/MemberService'
import { useNavigate,useParams } from 'react-router-dom'

const MemberComponent = () => {
 
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [content,setContent] = useState('')

  const {id} = useParams();
  const [error,setError] = useState({
    name : '',
    email : '',
    content : ''
  })


  const navigator = useNavigate();

  useEffect(()=>{
      if(id){
        getMember(id).then((respone)=>{
          setName(respone.data.name);
          setEmail(respone.data.email);
          setContent(respone.data.content);
        }).catch(error=>{
          console.erroe(error);
        })
      }
  },[])

function saveOurUpdateMember(e){
  e.preventDefault();

  if(validateForm()){
    const member = {name,email,content};
    console.log(member);
  
    if(id){
      updateMember(id,member).then((respone)=>{
        console.log(respone.data)
        navigator('/members')
      }).catch(error=>{
       console.error(error);
     })
    }
    else{
     
      createMember(member).then((response)=>{
        console.log(response.data)
        navigator('/members')
         }).catch(error=>{
          console.error(error);
        })
    }
 
 

  }

}

  function validateForm(){
      let valid = true;

      const errorsCopy = {...error}

      if(name.trim()){
        errorsCopy.name = '';
      }else{
        errorsCopy.name = 'Name is required'
        valid = false;
      }

      if(email.trim()){
        errorsCopy.email = '';
      }else{
        errorsCopy.email = 'Email is required'
        valid = false;
      }


      if(content.trim()){
        errorsCopy.content = '';
      }else{
        errorsCopy.content = 'Content is required'
        valid = false;
      }

      setError(errorsCopy);
      return valid
  }


  function pageTitle(){
      if(id){
        return <h2 className='text-center'>Update Member</h2>
      }
      else return <h2 className='text-center'>Add Member</h2>
  }

  return (
    <div className='container'>
      <br></br> <br></br>
      <br></br> <br></br>
      <div className='row'>
        <div className='card'>
          {pageTitle()}
          <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>Name : </label>
                  <input
                      type='text'
                      placeholder='Enter Member Name'
                      name="name"
                      value={name}
                      className={`form-control ${ error.name ? 'is-invalid':''}`}
                      onChange={(e)=>setName(e.target.value)}
                      >

                      </input>  
                      {error.name && <div className='invalid-feedback'> {error.name}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email : </label>
                  <input
                      type='text'
                      placeholder='Enter Member Email'
                      name="email"
                      value={email}
                      className={`form-control ${ error.email ? 'is-invalid':''}`}
                      onChange={(e)=>setEmail(e.target.value)}
                      >

                      </input>
                      {error.email && <div className='invalid-feedback'> {error.email}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Content : </label>
                  <input
                      type='text'
                      placeholder='Enter Member Content'
                      name="content"
                      value={content}
                      className={`form-control ${ error.content ? 'is-invalid':''}`}
                      onChange={(e)=>setContent(e.target.value)}
                      >

                      </input>
                      {error.content && <div className='invalid-feedback'> {error.content}</div>}

                </div>

                <button className='btn btn-success' onClick={saveOurUpdateMember}>Submit</button>
              </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MemberComponent