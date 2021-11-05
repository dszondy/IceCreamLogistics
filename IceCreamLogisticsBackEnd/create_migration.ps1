$Env:IceCreamDbConnectionString = "Host=localhost; Port=5432; Database=IceCreamLogistics; Username=postgres; Password=Asd123"   
dotnet ef migrations add update --startup-project="./src/IceCreamLogistics.Presentation" --project="./src/IceCreamLogistics.Infrastructure"                              
