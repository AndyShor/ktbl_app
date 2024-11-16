# ktbl_app

This repo contains interface for KTBL project (https://github.com/AndyShor/ktbl)
based on web bluetooth technology.
The interface is available at https://andyshor.github.io/ktbl_app/
In the presence of KTBL peripheral the interface will find it,
prompt user to pair with the device and after pairing starts recording the data,
until stop buttom in pressed. 
Presently interface shows preview of the total g-force graph and allows to download the data. 
Data can also be uploaded for post-processing at the backend where a ML algorithm identifies the moves 
(kettlebell swings, jerks and snatches) plots graphs of similarities of data to a certain move type and 
counts reps. All counted reps are then printed as a workput summary.
The interface is Progressive Web Application (PWA) and can be installed on home screen of mobile devices
(both Android and iOS). 

