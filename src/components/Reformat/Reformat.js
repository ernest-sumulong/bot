import React from "react";
import "../widgetStyle.css";


const Reformat = (props) => {

    const reformats = [
        {
            text: `
            Get the old/defective System Unit and make sure to power off the system or unplugged it from power source 
            `,
            id: 1
        },
        {
            text: `
            Open the cover case of System Unit by unscrew on it
            `,
            id: 2
        },
        {
            text: `
            Identify the location of HDD(Hard Disk Drive) or SSD(Solid State Drive)
            `,
            id: 3
        },
        {
            text: `
            Unplugged the cables from HDD or SSD. It is the SATA cable and SATA power cable
            `,
            id: 4
        },
        {
            text: `
            Unscrew and detach the HDD or SSD to its location
            `,
            id: 5
        },
        {
            text: `
            Unscrew and detached the HDD or SSD to its location
            `,
            id: 6
        },
        {
            text: `
            Get a HDD docking device and next available working computer
            `,
            id: 7
        },
        {
            text: `
            On a working computer, connect the USB cable from docking device to a working computer and power on the docking device
            `,
            id: 8
        },
        {
            text: `
            Once the docking device detected the HDD and a file explorer appear displaying the available logical partitions of inserted HDD.
            `,
            id: 9
        },
        {
            text: `
            Select the files that you want to be back up and copy and paste it on the directory location that you may choose
            `,
            id: 10
        },
        {
            text: `
            Once the copying of files is done. Safety remove the HHD to the working computer
            `,
            id: 11
        },
        {
            text: `
            Specify the specs of the defective system unit, through this you may have to identify what kind of Operating system is compatible on the system unit
            `,
            id: 12
        },
    ];

    const disMarkup = reformats.map((reformat) =>(
        <div
        key={reformat.id}
        value={reformat.text}
        className="para-item"
        >
            {reformat.id}. 
            {reformat.text}
        </div>
    ));
    return <div className="options-container">{disMarkup}</div>;
};

export default Reformat;