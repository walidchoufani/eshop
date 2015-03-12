/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 //storage.local.workflow = []
return storage.local.workflow
storage.local.workflow.push(
{id:"1"}

)
storage.local.workflow.push(
{id:"2"}

)
//return storage.local.workflow


//when invoked the 2nd time:
//storage.local.workflow = []
storage.local.workflow.push(
{id:"1"}

)
storage.local.workflow.push(
{id:"2"}

)
return storage.local.workflow

   							