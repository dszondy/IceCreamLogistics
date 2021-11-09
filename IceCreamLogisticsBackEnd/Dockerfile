FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /build
COPY . .
RUN dotnet restore "src/IceCreamLogistics.Presentation/IceCreamLogistics.Presentation.csproj"
WORKDIR "./src/IceCreamLogistics.Presentation"
RUN dotnet build "IceCreamLogistics.Presentation.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "IceCreamLogistics.Presentation.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "IceCreamLogistics.Presentation.dll"]
