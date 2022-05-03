import React,{useState} from 'react'
import "./Teams.css"

export default function Teams() {
    const [teamList,setTeamList] = useState([
        {
            team_img:"./assets/about/team1.png",
            team_name:"Abhishek Das",
            team_profile:"Project Management",
            team_dis:"Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. ",
        },
        // {
        //     team_img:"./assets/about/team2.png",
        //     team_name:"Neelesh",
        //     team_profile:"Quality Analyst",
        //     team_dis:"Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. ",
        // },
        {
            team_img:"./assets/about/team3.png",
            team_name:"Shubham",
            team_profile:"Developer",
            team_dis:"Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. Lorem ipsum is a dummy content. ",
        }

    ])
  return (
    <>
        <div className='teams_sec'>
            <div className='team_head'>
                <div className='display_h3 text-center'>Our Team</div>
            </div>
            <div className='team_list'>
                {teamList.map((team,index)=>{
                    return(
                        <div className='team_block' key={index}>
                            <div className='team_img_sec'>
                                <img src={team.team_img} className='img-fluid'/>
                            </div>
                            <div className='team_con_sec'>
                                <div className='team_name'>{team.team_name}</div>
                                <div className='team_profile'>{team.team_profile}</div>
                                <div className='team_dis'>{team.team_dis}</div>
                            </div>
                        </div>
                    )
                })}
               
            </div>
        </div>
    </>
  )
}
