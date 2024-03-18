const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Counter",  function(){
    let counter;

    before(async function(){
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
    })

    it("Deploy", function(){
        expect(counter.address).to.not.equal(0)
    })

    it("Initial value", async function(){
        expect(await counter.get()).to.equal(0)
    })

    it("Increment", async function(){
        await counter.inc()
        assert.equal(await counter.get(), 1)
    })

    it("Decrement", async function(){
        await counter.dec()
        expect(await counter.get()).to.equal(0)
    })

})