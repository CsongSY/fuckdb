let APIdb2struct
if(process.env.NODE_ENV === "development"){
  APIdb2struct = "http://localhost:8000"
}else{
  APIdb2struct = ""
}

export default {
  APIdb2struct
}