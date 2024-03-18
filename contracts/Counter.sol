// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Counter {
    int public counter = 0;

    function get() public view returns (int){
        return counter;
    }

    function inc() public {
        counter += 1;
    }

    function dec() public {
        counter -= 1;
    }
}
