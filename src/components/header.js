import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  close = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <nav class="fixed top-0 left-0 w-full flex items-center justify-between flex-wrap bg-teal-500 p-6 z-10">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" onClick={ this.close }>
            <span class="font-semibold text-xl tracking-tight">MarcLeitner.com</span>
          </Link>
        </div>
        <div class="block lg:hidden" onClick={ this.toggleOpen }>
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${ this.state.isOpen ? 'block' : 'hidden'}`}>
          <div class="text-sm lg:flex-grow">
            <Link to="/music" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" onClick={ this.close }>
              Music
            </Link>
            <Link to="/television" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" onClick={ this.close }>
              Television
            </Link>
            <Link to="/film" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" onClick={ this.close }>
              Film
            </Link>
            <Link to="/drawings" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" onClick={ this.close }>
              Drawings
            </Link>
            <Link to="/movie-guide" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" onClick={ this.close }>
              Movie Guide
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
