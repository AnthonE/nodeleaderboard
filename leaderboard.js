const DoodleLabsABI=
[{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"address","name":"_randomizerContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addMintWhitelisted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_projectName","type":"string"},{"internalType":"address","name":"_artistAddress","type":"address"},{"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"addProject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_script","type":"string"}],"name":"addProjectScript","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhitelisted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRoyaltyData","outputs":[{"internalType":"address","name":"artistAddress","type":"address"},{"internalType":"address","name":"additionalPayee","type":"address"},{"internalType":"uint256","name":"additionalPayeePercentage","type":"uint256"},{"internalType":"uint256","name":"royaltyFeeByID","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"hashToTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMintWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address","name":"_by","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextProjectId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectDetails","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"artist","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"website","type":"string"},{"internalType":"string","name":"license","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToAdditionalPayee","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToAdditionalPayeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToArtistAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToCurrencyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToCurrencySymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToPricePerTokenInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectIdToSecondaryMarketRoyaltyPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"projectScriptByIndex","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectScriptInfo","outputs":[{"internalType":"string","name":"scriptJSON","type":"string"},{"internalType":"uint256","name":"scriptCount","type":"uint256"},{"internalType":"string","name":"ipfsHash","type":"string"},{"internalType":"bool","name":"locked","type":"bool"},{"internalType":"bool","name":"paused","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectTokenInfo","outputs":[{"internalType":"address","name":"artistAddress","type":"address"},{"internalType":"uint256","name":"pricePerTokenInWei","type":"uint256"},{"internalType":"uint256","name":"invocations","type":"uint256"},{"internalType":"uint256","name":"maxInvocations","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"address","name":"additionalPayee","type":"address"},{"internalType":"uint256","name":"additionalPayeePercentage","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"address","name":"currencyAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectURIInfo","outputs":[{"internalType":"string","name":"projectBaseURI","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"randomizerContract","outputs":[{"internalType":"contract IRandomizer","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeMintWhitelisted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"removeProjectLastScript","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhitelisted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"renderProviderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"renderProviderPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleProjectIsActive","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleProjectIsLocked","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleProjectIsPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToProjectId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"updateAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address","name":"_additionalPayee","type":"address"},{"internalType":"uint256","name":"_additionalPayeePercentage","type":"uint256"}],"name":"updateProjectAdditionalPayeeInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address","name":"_artistAddress","type":"address"}],"name":"updateProjectArtistAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectArtistName","type":"string"}],"name":"updateProjectArtistName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"updateProjectBaseURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_currencySymbol","type":"string"},{"internalType":"address","name":"_currencyAddress","type":"address"}],"name":"updateProjectCurrencyInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectDescription","type":"string"}],"name":"updateProjectDescription","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"}],"name":"updateProjectIpfsHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectLicense","type":"string"}],"name":"updateProjectLicense","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_maxInvocations","type":"uint256"}],"name":"updateProjectMaxInvocations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectName","type":"string"}],"name":"updateProjectName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"updateProjectPricePerTokenInWei","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_scriptId","type":"uint256"},{"internalType":"string","name":"_script","type":"string"}],"name":"updateProjectScript","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectScriptJSON","type":"string"}],"name":"updateProjectScriptJSON","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_secondMarketRoyalty","type":"uint256"}],"name":"updateProjectSecondaryMarketRoyaltyPercentage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectWebsite","type":"string"}],"name":"updateProjectWebsite","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_randomizerAddress","type":"address"}],"name":"updateRandomizerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_renderProviderAddress","type":"address"}],"name":"updateRenderProviderAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_renderProviderPercentage","type":"uint256"}],"name":"updateRenderProviderPercentage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const { MongoClient, ObjectID } = require("mongodb");
const Express = require("express");
const BodyParser = require('body-parser');
var Web3 = require('web3');
var cors = require('cors')
const server = Express();
const { MessageActionRow, MessageButton } = require('discord.js');
const BigNumber = require('bignumber.js');
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({ extended: true }));
server.options('*', cors())
const client = new MongoClient(process.env["ATLAS_URI"]);
var dbleader;
const { MessageEmbed } = require('discord.js');
var collection;
var w3 = new Web3( new Web3.providers.HttpProvider('https://ethgateway.spacemonkey.games/v1/mainnet'));
const { Leaderboard } = require('@gamestdio/leaderboard');
var leaderboard;
https = require('https');
var fs = require('fs');

var httpsOptions = {
    key: fs.readFileSync('key.key'),
    cert: fs.readFileSync('cert.pem')};

var serverz = https.createServer(httpsOptions,server).listen("2053", async () => {
    try {
        await client.connect();
				dbleader= client.db("NGSM");
        console.log("Listening at :2053...");
				leaderboard= new Leaderboard(dbleader);
    } catch (e) {
        console.error(e);
    }
});;


async function CheckDoodleBalance(address) {
    address=address.toLowerCase();
    let g = "Error";
    let x = new Boolean(false);
    var rcAddr = "0x28f2D3805652FB5d359486dFfb7D08320D403240";
    var methodName = "tokensOfOwner";
    var register =  new w3.eth.Contract( DoodleLabsABI , rcAddr);
    var accAddr = await register.methods.tokensOfOwner(address).call(function (err, res) {

  if (err) {
    return -1;
  }

    for (let i = 0; i < res.length; i++)
    {
       if(res[i]> 0 && res[i] <4000)
       {
             x=true;
       }
       if(res[i] > 1999999 && res[i] <2005001)
       {
                 x=true;
       }
    }
})
return x;
}

server.post("/AddScore", async (request, response, next) =>
{
    response.header("Access-Control-Allow-Origin", "*");
    if(CheckMessage(request.body.PlainMessage,request.body.SignedMessage,request.body.BuilderAddress)!="0x0000000000000000000000000000000000000000")
    {
    const options = { address:request.body.BuilderAddress , token_address:"0x28f2d3805652fb5d359486dffb7d08320d403240" };
    try
    {
    var ger  = new Boolean();
    ger = CheckDoodleBalance(request.body.BuilderAddress);
      if(ger)
        {
          PostScore(request.body.PlainMessage,request.body.BuilderAddress);
              response.status(200).send({ message: "Good" });
        }
        else
        {
         console.log("Made it kinda");
          response.status(200).send({ message: "No NFTS" });
        }
     }
     catch (e)
        {
         response.status(501).send({ message: "No NFTS" });
        }
     }
      console.log("Missed message");
});

var AllowedAddresses = ["0xA6Ee0f0c7bB5ab94A666bc78455060EF4Daa44bB","0xA6Ee0f0c7bB5ab94A666bc78455060EF4Daa44bB"];
    server.get("/MakeLeaderboard", async (request, response, next) => { //?address=Gourav&scoreid=L1S&limit=1
        response.header("Access-Control-Allow-Origin", "*");
    try {
     if(CheckMessage(request.query.PlainMessage,request.query.SignedMessage)!="0x0000000000000000000000000000000000000000")
      {
        let message = request.query.message.toLowerCase();
        let x = new Boolean(false);
        forEach((AllowedAddresses, i) => {
          if(i == message) x =true;
        });

      }
    //    const result = await collection.findOne({ Address:message});
      //  let result = await collection.find({}).toArray();
		//	const gg = await surrounding(request.query.scoreid,request.query.address,5);
		//	console.log(gg);
			//const ScoreArray = [];
		//	for(let i = 0; i<gg.length;i++){
        //ScoreArray[i]= gg[i].LTS1;
    //  leaderboard.create("Test", { ttl: 1 * 60 * 60 * 24 });
		//	}
	  //	leaderboard.record("Test", { id: "aaa", score: 50 });
			//	leaderboard.record("Test", { id: "434a", score: 880 });
				//	leaderboard.record("Test", { id: "afgda", score: 505 });
					//	leaderboard.record("Test", { id: "ghfh", score: 530 });
						//	leaderboard.record("Test", { id: "aasda", score: 60 });
							//	leaderboard.record("Test", { id: "dfsaa", score: 580 });
		//	leaderboard.list("Test").then((rows) => {
  //  console.log(rows);
//});
//leaderboard.position( request.query.ID, request.query.Address).then((position) => {
	console.log(x);
	  response.json(position+1);//res.sendStatus(status)
    //console.log(position) // => 1 ~ 9999...
});
			   // response.status(200).send(gg);
      //  response.json(surrounding("L1S","0xA6Ee0f0c7bB5ab94A666bc78455060EF4Daa44bB",1));
    //  }
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

// positon takes ID for leaderboard and Address for wallet address
server.get("/position", async (request, response, next) =>
{ //?address=Gourav&scoreid=L1S&limit=1
    response.header("Access-Control-Allow-Origin", "*");
    try {
					leaderboard.position( request.query.id, request.query.address).then((position) =>
					{
	  				response.json(position+1);
					});
    		}
		catch (e)
				{
        	response.sendStatus(500);
    		}
});

server.get("/surrounding", async (request, response, next) => { //?address=Gourav&scoreid=L1S&limit=1
        response.header("Access-Control-Allow-Origin", "*");
    try {
			leaderboard.surrounding(request.query.id, request.query.address, { limit: 3 }).then((scores) => {
				response.json(scores);
			})
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});


function CheckMessage(message, sigObj, senderAddress )
{
  return recoveredAddress = w3.eth.accounts.recover(message, sigObj);
  //if(w3.utils.toChecksumAddress(senderAddress).toLowerCase() == recoveredAddress.toLowerCase())
//  {
    //  return senderAddress;
//  }
//  return "0x0000000000000000000000000000000000000000";
}

function GetAddress(message, sigObj)
{
 return recoveredAddress = w3.eth.accounts.recover(message, sigObj).toLowerCase();
}


server.post("/ModifyName", async (request, response, next) => {
    if(CheckMessage(request.body.PlainMessage,request.body.SignedMessage,request.body.BuilderAddress)!="0x0000000000000000000000000000000000000000")
    {
    const options = { address:request.body.BuilderAddress , token_address:"0x28f2d3805652fb5d359486dffb7d08320d403240" };
    try
    {
      const NGSMCount = await Moralis.Web3API.account.getNFTsForContract(options);
      if(NGSMCount.total>0)
        {
          response.status(200).send({ message: "Good" });
          SetupPlayerName(request.body.PlainMessage,request.body.BuilderAddress,true);
        }
     }
     catch (e)
     {
         response.status(500).send({ message: "Wrong" });
}}
});


server.get("/GetScores", async (request, response, next) => {

    try {
        let result = await collection.find({}).toArray();
        response.send(result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});
// Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7
async function GetDiamondBalanceFromContract(address){
  address=address.toLowerCase();
const options = {
  chain: "0xa869",
  address: "0x6ca32C1b8100905baB379892317793eE2e66BF85",
  function_name: "balanceOf",
  abi: DiamondABI,
  params: { address: address},
};

const allowance = await Moralis.Web3API.native.runContractFunction(options);
let oneEther = new BigNumber(allowance);
oneEther.shiftedBy(-18);
return oneEther;
}
const crypto = require('crypto');
const ENC_KEY = "bf3c199c2470cb477d907b1e0917c17b"; // set random encryption key
const IV = "5183666c72eec9e4"; // set random initialisation vector

var encrypt = ((val) => {
  let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
});

var decrypt = ((encrypted) => {
  let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  return (decrypted + decipher.final('utf8'));
});
