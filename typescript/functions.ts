// declaring function type both params & return are required but
// during function implementation return type is optional as typscript can guess
// return type by return statement

// Number of param have to be matched (in js this does not required)
// In JavaScript, every parameter is optional, and users may leave them off as they see fit.

// It is not possible to pass null to defaut parameter

// f a default-initialized parameter comes before a required parameter, users need to explicitly pass undefined to get the default initialized value.

// Rest Parameters
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
// employeeName will be "Joseph Samuel Lucas MacKinzie"
// restOfName will contain ["Samuel", "Lucas", "MacKinzie"]   
  let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// to ensure caller we can use function (this: Deck) will ensure this in the will be Deck

// The downside is that one arrow function is created per object of type Handler. 
// Methods, on the other hand, are only created once and attached to Handler’s prototype.
// They are shared between all objects of type Handler.

