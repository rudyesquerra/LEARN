import React, { Component } from 'react'

class Content extends Component {
  constructor (props) {
          super(props);

          this.state = {
              videoURL: 'https://ak2.picdn.net/shutterstock/videos/14103332/preview/stock-footage--k-ultra-hd-version-happy-and-attractive-young-couple-in-love-together-in-their-stylish-apartment.mp4'
          }
      }
      render () {
          return (
              <video id="background-video" loop autoPlay>
                  <source src={this.state.videoURL} type="video/mp4" />
                  <source src={this.state.videoURL} type="video/ogg" />
                  Your browser does not support the video tag.
              </video>
          )
      }
  };
export default Content
