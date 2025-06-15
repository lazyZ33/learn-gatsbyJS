import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const AboutPage= () =>{
    return(
        <Layout pageTitle="About Page">
            <h1>This is About Page</h1>
            <p>This serve as the content within about page</p>
            <Link to="/">Go back to Home</Link>
        </Layout>
    )
}
export const Head = ({ pageTitle }) => (
  <title>About Us</title>
)
export default AboutPage
