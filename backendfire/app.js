const express=require("express");
const {initializeApp} = require("firebase/app")
const credentials=require("./blockfin-74932-firebase-adminsdk-w0jof-2b91e469f7");
const {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} = require("firebase/auth");
const {getFirestore,query,collection,addDoc, where, getDocs,getDoc, setDoc,updateDoc,doc} = require("firebase/firestore");
const { firestore } = require("firebase-admin");
const cors=require("cors")
const app=express();

app.use(express.json());
app.use(cors())

const appFire = initializeApp(credentials);

const db= getFirestore(appFire);
const auth = getAuth(appFire);


const collectionDetails=collection(db,'userinfo');
// let userDetails=db.collection("userinfo")
let uid;
app.post("/api/createUser",async (req,res)=>{
    const user = await createUserWithEmailAndPassword(auth,req.body.email,req.body.password);
    uid = user.user.uid;
    console.log(uid);
    res.status(200).send({verified:true});
})

app.post("/api/addDetails",async (req,res)=>{
    const users=await addDoc(collectionDetails,{
        blogs:[{}],
        userid:uid,
        name:req.body.name,
        gender:req.body.gender,
        metaID:req.body.metaID,
        saved:[],
        myPost:[],
        myTokens:0
    })
    res.json({success:"true",users});
})

// blogs = blogId,score,upvote,downvote,maxScore,coins


app.post("/api/login",async (req,res) => {
    console.log(req.body)
    const data=req.body;
    const id = data.email;
    const password = data.password;
    try {
        const response = await signInWithEmailAndPassword(auth,id,password);
        uid = response.user.uid;
        console.log('hello world')
        res.send(uid)
    } catch (error) {
        console.log('hello world')
        res.send(error.message)
    }

})
app.get("/api/getUser",async (req,res)=>{
    console.log(uid);
    const queryRef=  query(collectionDetails,where("userid","==",uid));
    const data =await getDocs(queryRef);
    res.json(data.docs.map(doc => ({...doc.data(),id:doc.id})));
})



app.post("/api/scoreUpdate",(req,res)=>{
    const {blogID,vote} = req.data;
    if(vote){
        // upvote
        const newScore = getchScore+1;
        if(newScore > maxScore){
            if(5*e^coins <= newScore){
                coins++;
                maxScore = newScore;
                res.send({
                    "update" : true,
                    "coinToSend" : coins
                })
            }
        }
        else{
            res.send({
                "update" : false,
                "coinsToSend":0
            })
        }
    }
    else{
        score = score-0.25;
    }
})

app.get("/api/sortBlogs",async (req,res)=>{
    const queryRef=  query(collectionDetails);
    const data =await getDocs(queryRef);
    let temp=[];
    const newData=data.docs.map(doc => ({...doc.data(),id:doc.id}))
    // console.log(newData[0].blogID);
    for(let i=0;i<newData.length;i++){
        for(let j=0;j<newData[i].blogID.length;j++){
            temp.push(newData[i].blogID[j])
        }
    }
    temp.sort((a, b) => b.score - a.score);

    res.send(temp);
})

app.post("/api/postBlog",async (req,res)=>{
    // console.log(uid);
    const{blogID}=req.body;
    const queryRef=  query(collectionDetails,where("userid","==",uid));
    const bigData =await getDocs(queryRef);
    const data=bigData.docs.map(doc => ({...doc.data(),id:doc.id}));
    console.log(data)
    let docData;
    for(let i=0;i<data.length;i++){
        if(data[i].userid == uid){
            docData = data[i];
            break;
        }
    }
    console.log(docData);

    
    const result = await updateDoc(doc(db,'userinfo',docData.id),{
        blogs:docData.blogs.concat({
            blogID:blogID,
            upvote:0,
            downvote:0,
            maxScore:0,
            currentscore:0
    })})
    res.send(result);
    // const queryRef= await updateDoc(db,"userinfo",where("userid","==",uid),{
    //     blogs:blogData.push({
    //         blogID:blogID,
    //         upvote:0,
    //         downvote:0,
    //         maxScore:0,
    //         currentscore:0
    //     }),
    // });
    // console.log(queryRef);
    // res.send("hello");

})





app.listen(5000,()=>{
    console.log("Server started on port 5000");
})
