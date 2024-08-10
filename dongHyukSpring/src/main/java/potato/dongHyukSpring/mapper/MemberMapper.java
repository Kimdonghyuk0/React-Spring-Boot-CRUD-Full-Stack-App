package potato.dongHyukSpring.mapper;

import potato.dongHyukSpring.dto.MemberDto;
import potato.dongHyukSpring.entity.Member;

public class MemberMapper {

    public static MemberDto mapToMemberDto(Member member) {//엔티티를 DTO로 바꿔줌
        return new MemberDto(
          member.getId(), member.getName(), member.getEmail(), member.getContent()
        );

    }
    public static Member mapToMember(MemberDto memberDto){ //DTO를 엔티티로
        return new Member(
                memberDto.getId(), memberDto.getName(), memberDto.getEmail(), memberDto.getContent()
        );
    }

}
