/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 //adding comments.
var log = require("log");
console.log("--------------------12323")
return {"<script>alert(\"234\")<script>": "<script>alert(\"234\")<script>" }   				   							