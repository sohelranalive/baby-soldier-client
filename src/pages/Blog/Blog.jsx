const Blog = () => {
    return (
        <div className="container mx-auto">
            <div className="space-y-4 px-4">
                <div className="mb-8">
                    <h1 className="text-4xl text-center font-bold text-[#F7CD2E]">Welcome to the blog section</h1>
                    <p className="text-2xl text-center font-bold text-primary">Read something exciting today.</p>
                </div>
                <div className="border-2 space-y-2 rounded-md p-4 border-[#F7CD2E]">
                    <h1 className="text-justify text-2xl bold italic">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className="text-justify"><span>&#8594;</span>
                        An access token is a credential that is issued by an authentication server to a client application after the client successfully authenticates them. Access token is actually defines the client authorization. Based on this authentication credential we can protect important resources such as APIs or services.
                        <br />
                        <br />
                        A refresh token is also issued by the authentication server, sever sends refresh token while it sends the access token. It is used to obtain a new access token when the current one expires. Refresh tokens have a longer lifespan than access tokens and are typically used to request new access tokens without requiring the user to re-authenticate.
                        <br />
                        <br />
                        At first, the client application authenticates the user and receives an access token and a refresh token from the authentication server. Then the client includes the access token in the header section while it send requests to access protected APIs. This token acts as proof of authorization.
                        Normally the authentication server limits the validity duration of access token. So, if the access token expires, the client can use the refresh token to request a new access token from the authentication server. Refresh token is important to get access token again, othersie clients need to login again to get a access token.
                    </p>
                </div>
                <div className="border-2 space-y-2 rounded-md p-4 border-primary">
                    <h1 className="text-justify text-2xl bold italic">Difference between SQL and NoSQL databases?</h1>
                    <p className="text-justify"><span>&#8594;</span>
                        SQL and NoSQL both are structured query language, which is used to manage database. Both have their own characteristics. Both language provides immense functionality. The choice between SQL and NoSQL databases depends on various factors, including the specific requirements of the application, scalability needs, data structure, and the complexity of queries.
                        <br />
                        <br />
                        SQL: SQL Database is a Relational Database management system. It is vertically scalable and collection of highly structured tables. SQL provides fixed and predefined schema. This can be used for complex queries. It s not suitable for hierarchical data storage. SQL database examples are- Oracle, Postgres, MySQl and MS-SQL.
                        <br />
                        <br />
                        NoSQL:  NoSQL is a Non-relational or distributed database management system. It is horizontally scalable and provides dynamic schema. It can be document base, key value pairs, graph database. Suitable for hierarchical data storage and not good for complex queries. SQL database examples are- MongoDB, Redis, Cassandra, Hbase etc.
                    </p>
                </div>
                <div className="border-2 space-y-2 rounded-md p-4 border-[#F7CD2E]">
                    <h1 className="text-justify text-2xl bold italic">What is Express JS? What is Nest JS</h1>
                    <p className="text-justify"><span>&#8594;</span>
                        Express.js is a popular web application framework of Node.js. It provides a minimal and flexible set of tools and features for building web applications and APIs. Express.js is the most popular web framework for Node.js. Express.js also called the de facto standard server framework for Node.js.
                        <br />
                        <br />
                        Nest.js is a progressive and one of the fastest-growing Node.js framework for building efficient and scalable server-side applications. It uses modern JavaScript/TypeScript features and design patterns. For this reason, it provide a strong foundation for building back-end applications.
                    </p>
                </div>
                <div className="border-2 space-y-2 rounded-md p-4 border-primary">
                    <h1 className="text-justify text-2xl bold italic">What is MongoDB aggregate and how does it work?</h1>
                    <p className="text-justify"><span>&#8594;</span>
                        MongoDB aggregate is used to perform advanced data aggregation operations on collections. It allows us to process and transform data within the database server, provides the opportunity to data analysis and manipulation.
                        <br /><br />
                        MongoDB aggregation method operates a series of operations to process data sequentially. The aggregate method takes an array of stages as its argument. Each stage represents a specific operation to be performed on the data. These stages are executed in the order they are specified, creating a pipeline of operations. The order of stages in the pipeline is crucial as it determines the flow of data processing. The aggregate method executes these stages on the server-side, allowing for efficient data manipulation and analysis directly within the database. This enables developers to perform complex data aggregation tasks and obtain meaningful results from their MongoDB collections.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;