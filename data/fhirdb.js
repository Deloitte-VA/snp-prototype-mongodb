var conn;
while(conn===undefined)
{
    try
    {
        conn = new Mongo();
    }
    catch(Error)
    {
        print(Error);
    }
    print("sleep...");
    sleep(1000);
}

print("creating smartformt db...");
var db = conn.getDB( "fhirDB" );


print("creating collection...");
db.createCollection("fhirEncounterCollection");

print("completed creation.");
