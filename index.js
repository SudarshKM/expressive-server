import jsonServer from 'json-server'

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const app = jsonServer.create();  //express server

app.use(middleware);

app.use(router);

const PORT = 3000 || process.env.PORT ;

app.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`);
})