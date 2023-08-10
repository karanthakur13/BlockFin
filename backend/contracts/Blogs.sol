// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Blogs {
    struct Content {
        address publisher;
        uint256 ID;
        string title;
        string[] _children;
        string[] _tags;
        string[] _classname;
        string[] _src;
        string[] tags;
        string date;
        string thumbnail;
        string timetoread;
    }

    uint256 count = 0;
    mapping(uint256 => Content) mappings;

    function addblog(
        string memory _title,
        string[] memory _types,
        string[] memory _classname,
        string[] memory _children,
        string[] memory _src,
        string[] memory _tags,
        string memory _thumbnail,
        string memory _timetoread
    ) public {
        Content storage blog = mappings[count];
        blog.publisher = msg.sender;
        blog._children = _children;
        blog._src = _src;
        blog._tags = _types;
        blog._tags = _classname;
        blog.title = _title;
        blog.ID = count;
        blog.tags = _tags;
        blog.date = uint2str(block.timestamp);
        blog.thumbnail = _thumbnail;
        blog.timetoread = _timetoread;
        count += 1;
    }

    function uint2str(uint256 _i) internal pure returns (string memory str) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        str = string(bstr);
    }

    function getBlogs() public view returns (Content[] memory) {
        Content[] memory allblogs = new Content[](count);
        for (uint i = 0; i < count; i++) {
            Content storage item = mappings[i];
            allblogs[i] = item;
        }
        return allblogs;
    }
}
