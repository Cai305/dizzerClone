// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//This is the Base Url for Deeer API
const BaseUrl = "https://api.deezer.com";
export const environment = {
  production: false,

  Albums_api_Endpoint_Url: `${BaseUrl}/album/`,
  Artists_api_Endpoint_Url: `${BaseUrl}/artist/`,
  Chart_api_Endpoint_Url: `${BaseUrl}/chart/`,
  Editorials_api_Endpoint_Url: `${BaseUrl}/editorial/`,
  Genders_api_Endpoint_Url: `${BaseUrl}/genders/`,
  Infos_api_Endpoint_url: `${BaseUrl}/info/`,
  Options_api_Endpoint_url: `${BaseUrl}/options/`,
  Playlists_api_Endpoint_url: `${BaseUrl}/playlist/`,
  Radio_api_Endpoint_url: `${BaseUrl}/radio/`,
  Search_by_Artist_api_Endpoint_url: `${BaseUrl}/search?q/`,
  Track_api_Endpoint_url: `${BaseUrl}/track/`,
  User_api_Endpoint_url: `${BaseUrl}/user/me`


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
