angular.module('storyCtrl', ['storyService'])

.controller('StoryController', function(Story) {

  var vm = this;

  Story.allStory()
    .success(function(data){
      vm.stories = data; //possible should be vm.story
    });

    vm.createStory = function() {
      vm.message = '';
      Story.create(vm.storyData)
        .success(function(data){

          //clear up the form
          vm.storyData = '';

          vm.message = data.message;
          vm.stories.push(data); //possible should be vm.story
        });
    };


})
