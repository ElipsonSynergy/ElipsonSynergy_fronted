import { NextResponse } from 'next/server';


export async function POST(request) {

    const response= await request.json();
    console.log(`Server Info: ${response.content}` );
    console.log(response);
    return NextResponse.json(response);
  
};