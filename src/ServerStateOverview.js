/**
 * Created by sbothe on 11.04.17.
 */
import React, { Component } from 'react';
import AutoRefreshServerState from './AutoRefreshServerState'
import './ServerStateOverview.css';

class ServerStateOverview extends Component {

    render() {
        return (
            <div className="serverStateTable">
                <h2>Server state <small>Overview</small></h2>
                <table className="serverStateEntries">
                    <thead>

                    </thead>
                    <tbody>
                    <tr>
                        <td className="colspace" ><span>LED-Remote Server</span><br/><span className="smallSpan">192.168.178.45</span></td>
                        <td className="colspace"><AutoRefreshServerState refreshRate="50000" url="http://localhost:5000/serverstatus/ledRemoteServerAlive" /> </td>
                    </tr>
                    <tr>
                        <td className="colspace"><span>LED-Remote Backend</span><br/><span className="smallSpan">192.168.178.45:8444/alive</span> </td>
                        <td className="colspace"><AutoRefreshServerState refreshRate="50000" url="http://localhost:5000/serverstatus/ledBackendAlive" /> </td>
                    </tr>
                    <tr>
                        <td className="colspace"><span>LED-Remote External</span><br/><span className="smallSpan">http://sbotheservices.myddns.me:8444</span> </td>
                        <td className="colspace"><AutoRefreshServerState refreshRate="50000" url="http://localhost:5000/serverstatus/alexaSkillExternalCall" /> </td>
                    </tr>
                    <tr>
                        <td className="colspace"><span>KODI Server</span><br/><span className="smallSpan">192.168.178.39</span></td>
                        <td className="colspace"><AutoRefreshServerState refreshRate="50000" url="http://localhost:5000/serverstatus/kodiServerAlive" /> </td>
                    </tr>
                    <tr>
                        <td className="colspace"><span>Printer / CUPS Server</span><br/><span className="smallSpan">192.168.178.39</span></td>
                        <td className="colspace"><AutoRefreshServerState refreshRate="50000" url="http://localhost:5000/serverstatus/buildpiServerAlive" /> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ServerStateOverview;