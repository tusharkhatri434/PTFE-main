// File: GoogleMapEmbed.js
import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112089.30660208002!2d77.6576493!3d28.9272243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6153fbc7a2d5%3A0x1a6ebd0029a7b42!2sMeerut%20PTFE%20Products%20Pvt.%20Ltd.%20(PTFE%20Teflon%20Cable%20%26%20Wire%20Manufacturer%20India)!5e0!3m2!1sen!2sin!4v1720867477593!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Meerut PTFE Products Location"
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
