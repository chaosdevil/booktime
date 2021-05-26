const React = require("react");
const ImageBox = require("./imageswitcher");
const renderer = require("react-test-renderer");
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });

test('ImageBox switches images correctly', () => {
    var images = [
        {
            "image": "1.jpg",
            "thumbnail": "1.thumbnail.jpg"
        },
        {
            "image": "2.jpg",
            "thumbnail": "2.thumbnail.jpg"
        },
        {
            "image": "3.jpg",
            "thumbnail": "3.thumbnail.jpg"
        }
    ]

    const wrapper = Enzyme.shallow(
        React.createElement(ImageBox, { images: images, imageStart: images[0] })
    );
    
    const currentImage = wrapper.find('.current-image').first().prop('src');
    wrapper.find('div.image').at(2).find('img').simulate('click');
    const newImage = wrapper.find('.current-image > img').first().prop('src');

    expect(currentImage).not.toEqual(newImage);
});
