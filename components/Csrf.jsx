async function csrf_token() {
    const response = await fetch("http://localhost/elipson/backend/public/csrf");
    const data = await response.json();
    return data.csrf;
}

export default async function Csrf() {

  const csrf = await csrf_token();

  return (
    <>
        <input type="hidden" name="_token" value={csrf} autoComplete="off"></input>
    </> 
  )
}
