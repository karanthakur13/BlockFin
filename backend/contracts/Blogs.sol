// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Blogs {
    struct content {
        address publisher;
        uint256 ID;
        string title;
        string body;
        string[] tags;
    }

    uint256 count = 0;
    mapping(uint256 => content) public mappings;

    function addblog(
        string memory _title,
        string memory _body,
        string[] memory _tags
    ) public {
        content storage blog = mappings[count];
        blog.publisher = msg.sender;
        blog.body = _body;
        blog.title = _title;
        blog.ID = count;
        blog.tags = _tags;
        count += 1;
    }
}
