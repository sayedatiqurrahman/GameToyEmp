import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-left mt-32'>
                <h1 className='text-7xl fontB '>Welcome</h1>
                <p className='fontA'>_to Blog Page</p>
            </div>
            <div className='mt-20 max-w-4xl mx-auto'>
                <h3 className='text-2xl fontA mb-2'>1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>
                    <b>Access Token:</b><br />
                    - An access token is a credential that is used to authenticate and authorize a client (user or application) to access protected resources.
                    - It is a short-lived token with an expiration time.
                    - Access tokens are included in the headers of HTTP requests to access protected resources.
                    <br />
                    <b>Refresh Token:</b><br />
                    - A refresh token is a credential used to obtain a new access token without re-authentication.
                    - It is a long-lived token with a longer expiration time compared to access tokens.
                    - Refresh tokens are securely stored on the client-side and sent to the server to obtain a new access token.
                    <br />
                    <b>How They Work:</b><br />
                    1. User authenticates and receives an access token and refresh token from the server.
                    2. The access token is used to access protected resources by including it in requests.
                    3. When the access token expires, the client uses the refresh token to request a new access token.
                    4. The server verifies the refresh token and issues a new access token.
                    5. This process continues until the refresh token itself expires or is revoked.
                    <br />
                    <b>Storage on Client-side:</b><br />
                    - Access tokens and refresh tokens should be stored securely on the client-side.
                    - The recommended approach is to store them in secure HTTP-only cookies that are not accessible from JavaScript.

                </p>

                <div className='mt-10'>
                    <h3 className='text-2xl fontA '>2) Compare SQL and NoSQL databases?</h3>

                    <p>
                        <br />
                        <b>SQL Databases:</b><br />
                        - Structured data model with predefined schema.
                        - Use SQL query language.
                        - Rigid schema that requires altering table structures for schema changes.
                        - Vertically scalable, challenging to scale horizontally.
                        - ACID compliance for strong transactional support.
                        - Examples: MySQL, PostgreSQL, Oracle.
                        <br />
                        <b>NoSQL Databases:</b><br />
                        - Flexible data models (key-value, document, columnar, graph).
                        - May use query languages or APIs specific to the data model.
                        - Flexible schema allows dynamic changes to the data structure.
                        - Designed for horizontal scalability and handling large-scale data.
                        - Prioritize availability and partition tolerance over strict consistency.
                        - Examples: MongoDB, Cassandra, Redis, Couchbase.
                        <br />
                        <b>Key Differences:</b><br />
                        <b> SQL:</b> structured, SQL language, rigid schema, limited scalability. <br />
                        <b>NoSQL:</b> flexible, diverse query languages, dynamic schema, scalable and distributed architecture.
                    </p>
                </div>

                <div className='mt-4'>
                    <h3 className='text-2xl fontA mb-2'>3) What is express js and What is Nest JS ?</h3>

                    <p>
                        <b>Express.js:</b><br />
                        - Minimalistic and flexible web application framework for Node.js.
                        - Handles HTTP requests, routing, middleware integration, and response handling.
                        - Follows a middleware-based architecture.
                        - Lightweight and has a large ecosystem of plugins and middleware.
                        - Used for building web applications and APIs.
                        <br />
                        <b>Nest.js:</b><br />
                        - Progressive and scalable TypeScript-based web application framework.
                        - Built on top of Express.js.
                        - Provides an opinionated structure and architectural patterns.
                        - Follows modular design approach.
                        - Used for building server-side applications.
                    </p>

                </div>

                <div className='mt-4'>
                    <h3 className='text-2xl fontA mb-2'>4) What is MongoDB aggregate and how does it work?</h3>

                    <p>

                        <b>MongoDB's</b> aggregate is an advanced data processing framework that allows you to perform complex queries, transformations, grouping, and calculations in MongoDB. It uses a pipeline of stages to process documents. Stages like match, group, project, sort, and limit are used to filter, group, reshape, sort, and limit the results. It enables powerful data analysis and aggregation within the <b>database itself</b>.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Blog;