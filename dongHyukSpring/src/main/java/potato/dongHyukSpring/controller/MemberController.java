package potato.dongHyukSpring.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import potato.dongHyukSpring.dto.MemberDto;
import potato.dongHyukSpring.entity.Member;
import potato.dongHyukSpring.service.MemberService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/member")

public class MemberController {

    private MemberService memberService;
    //Member 추가 Rest Api
    @PostMapping
    public ResponseEntity<MemberDto> createMember(@RequestBody MemberDto memberDto) {
    MemberDto savedMember = memberService.createMember(memberDto);//dto를 데베에 저장
    return new ResponseEntity<>(savedMember, HttpStatus.CREATED);


    }
    //Member Get Rest Api
    @GetMapping("{id}")
    public ResponseEntity<MemberDto> getMemberById(@PathVariable("id") Long memberId) {
        MemberDto memberDto = memberService.getMemberById(memberId);
        return ResponseEntity.ok(memberDto);
    }
    // Build Get All Members Rest Api
    @GetMapping
    public ResponseEntity<List<MemberDto>> getAllMember(){
       List<MemberDto> members =  memberService.getAllMembers();
       return ResponseEntity.ok(members);
    }

    // Build Update Member Rest Api
    @PutMapping("{id}")
    public ResponseEntity<MemberDto> updateMember( @PathVariable("id") Long memberId,
                                                   @RequestBody MemberDto updateMember) {
        MemberDto memberDto = memberService.updateMember(memberId, updateMember);
        return ResponseEntity.ok(memberDto);
    }





}
