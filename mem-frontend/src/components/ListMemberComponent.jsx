import React, {useEffect, useState} from 'react'
import { listMembers,deleteMember } from '../services/MemberService';
import { useNavigate } from 'react-router-dom';
const ListMemberComponent = () => {

  const [members,setMembers] = useState([]);
  const navigator = useNavigate();

  useEffect(()=>{  //콜백함수로 랜더링 이후에 실행됨
    getAllMember();
  },[]);

  function getAllMember(){
    listMembers().then((response)=>{
      setMembers(response.data);
    }
    ).catch(error=>{
      console.error(error);
    })
  }
   function addNewMember(){
      navigator('/add-member')
   }
   function updateMember(id){
      navigator(`/edit-member/${id}`)
 }

 function removeMember(id){
  console.log(id);

  deleteMember(id).then((respone)=>{
   getAllMember();
  }).catch(error=>{
    console.erroe(error);
  })
}


  return (
    <div className='container'>

      <h2>List of Members</h2>
      <button className='btn btn-primary mb-2' onClick={addNewMember}>Add Member</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Member name</th>
            <th>Member email</th>
            <th>Member content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            members.map(member => 
              <tr key = {member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.content}</td>
                <td><button className='btn btn-info' onClick={()=>{
                  updateMember(member.id)
                }} >Update</button><button className='btn btn-danger' onClick={()=>{
                  removeMember(member.id)
                }} 
                style={{marginLeft: '10px'}}>Delete</button></td>

                
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListMemberComponent