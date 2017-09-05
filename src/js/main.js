 require.config({
 	baseUrl:"./src/js/",
 	paths:{
 		bootstrap:"../../node_modules/bootstrap/dist/js/bootstrap",
 		jquery:"../../node_modules/jquery/dist/jquery",
 		a:"./a"
 	},
 	shim:{
 		bootstrap:{
 			deps:["jquery"]
 		},
 		a:{
 			exports:"util"
 		}
 	}
 })
 
 
 
 
 define(['jquery', 'a'], function($,a) {
  console.log(arguments);
});
