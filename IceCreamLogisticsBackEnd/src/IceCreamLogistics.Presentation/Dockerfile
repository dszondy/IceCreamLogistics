FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/IceCreamLogistics.Presentation/IceCreamLogistics.Presentation.csproj", "IceCreamLogistics.Presentation/"]
RUN dotnet restore "src/IceCreamLogistics.Presentation/IceCreamLogistics.Presentation.csproj"
COPY . .
WORKDIR "/src/IceCreamLogistics.Presentation"
RUN dotnet build "IceCreamLogistics.Presentation.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "IceCreamLogistics.Presentation.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "IceCreamLogistics.Presentation.dll"]
