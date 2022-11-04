import { createGlobalStyle } from "styled-components";
export const Global =  createGlobalStyle`
*
{
    margin:0;
    padding:0;
    font-family: 'Work Sans', sans-serif;
}


html
{
    font-size:62.5%;
    overflow-x: hidden;
}
h1
{
    color:${(theme)=>theme.colors.heading};
    font-size:3rem;
    font-weight:900;
}
h2
{
    color:${(theme)=>theme.colors.heading};
    font-size:3rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
}
p
{
    color:${(theme)=>theme.colors.text};
    font-size:1.5rem;
    line-height:1.5;
  margin-top: 1rem;
  font-weight:400;
}
a
{
    text-decoration:none;
}
li
{
    list-style:none;
}
`;